// ============= SUBMISSION MANAGEMENT ============= 

// Save submission to localStorage
function saveSubmission(data) {
    let submissions = JSON.parse(localStorage.getItem('ai4bnt_submissions') || '[]');
    const submission = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        topic: data.topic || 'General',
        github: data.github || '',
        message: data.message,
        timestamp: new Date().toLocaleString()
    };
    submissions.unshift(submission);
    localStorage.setItem('ai4bnt_submissions', JSON.stringify(submissions));
    return submission;
}

// Get all submissions from localStorage
function getSubmissions() {
    return JSON.parse(localStorage.getItem('ai4bnt_submissions') || '[]');
}

// Delete a specific submission
function deleteSubmission(id) {
    let submissions = getSubmissions();
    submissions = submissions.filter(s => s.id !== id);
    localStorage.setItem('ai4bnt_submissions', JSON.stringify(submissions));
    displaySubmissions();
}

// Clear all submissions
function clearAllSubmissions() {
    if (confirm('Are you sure you want to delete all submissions? This action cannot be undone.')) {
        localStorage.removeItem('ai4bnt_submissions');
        displaySubmissions();
        alert('All submissions have been cleared.');
    }
}

// Display submissions in the UI
function displaySubmissions() {
    const submissions = getSubmissions();
    const container = document.getElementById('submissionsContainer');
    const noSubmissions = document.getElementById('noSubmissions');

    if (!container) return; // Exit if container doesn't exist

    container.innerHTML = '';

    if (submissions.length === 0) {
        noSubmissions.style.display = 'block';
        return;
    }

    noSubmissions.style.display = 'none';

    submissions.forEach(submission => {
        const card = document.createElement('div');
        card.className = 'submission-card';
        card.innerHTML = `
            <div class="submission-actions">
                <button class="delete-btn" onclick="deleteSubmission(${submission.id})">Delete</button>
            </div>
            <div class="submission-header">
                <div>
                    <div class="submission-name">${escapeHtml(submission.name)}</div>
                    <div class="submission-email"><a href="mailto:${submission.email}">${escapeHtml(submission.email)}</a></div>
                </div>
                <div class="submission-topic">${escapeHtml(submission.topic)}</div>
            </div>
            ${submission.github ? `
            <div class="submission-github">
                <a href="${escapeHtml(submission.github)}" target="_blank" rel="noopener noreferrer">
                    🔗 GitHub / Website
                </a>
            </div>
            ` : ''}
            <div class="submission-message">${escapeHtml(submission.message)}</div>
            <div class="submission-time">Submitted: ${submission.timestamp}</div>
        `;
        container.appendChild(card);
    });
}

// Download submissions as JSON
function downloadSubmissions() {
    const submissions = getSubmissions();
    if (submissions.length === 0) {
        alert('No submissions to download.');
        return;
    }

    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai4bnt_submissions_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;
    const github = document.getElementById('github').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        const submission = saveSubmission({ name, email, topic, github, message });
        alert(`Thank you ${name}! We have received your message and will get back to you at ${email} shortly.`);
        displaySubmissions();
        e.target.reset();
    }
}

// Initialize submissions display on page load
document.addEventListener('DOMContentLoaded', displaySubmissions);
