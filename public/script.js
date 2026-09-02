const form = document.getElementById('questionForm');
const questionInput = document.getElementById('questionInput');
const questionsList = document.getElementById('questionsList');
const loading = document.getElementById('loading');
const submitBtn = document.getElementById('submitBtn');

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatResponse(text) {
  return escapeHTML(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?:^|\s)-\s+/g, '<br>• ')
    .replace(/\n/g, '<br>');
}

function renderSingleItem(item) {
  questionsList.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'question-card';

  div.innerHTML = `
    <p><strong>Question:</strong> ${escapeHTML(item.question)}</p>
    <p><strong>Response:</strong> ${formatResponse(item.response)}</p>
    <p><strong>Created:</strong> ${new Date(item.created_at).toLocaleString()}</p>
  `;

  questionsList.appendChild(div);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const question = questionInput.value.trim();

  if (!question) return;

  try {
    if (loading) loading.classList.remove('hidden');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Thinking...';
    }

    const res = await fetch('/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || 'Something went wrong');
    }

    if (result.data) {
      renderSingleItem(result.data);
      questionInput.value = '';
    } else {
      questionsList.innerHTML = `
        <div class="question-card">
          <p><strong>Error:</strong> No response data was returned.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('frontend error:', error);

    questionsList.innerHTML = `
      <div class="question-card">
        <p><strong>Error:</strong> ${escapeHTML(error.message)}</p>
      </div>
    `;
  } finally {
    if (loading) loading.classList.add('hidden');

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  }
});
