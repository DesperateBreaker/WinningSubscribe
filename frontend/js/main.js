document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        submitForms();
    });
});

function submitForms() {
    const lottoIssue = document.getElementById('issueLotto').value;
    const lottoNumbers = document.getElementById('numbersLotto').value;
    const lottoValid = document.querySelector('input[name="validLotto"]:checked').value === 'true';

    const ballIssue = document.getElementById('issueBall').value;
    const ballNumbers = document.getElementById('numbersBall').value;
    const ballValid = document.querySelector('input[name="validBall"]:checked').value === 'true';

    const data = {
        lotto: { issue: lottoIssue, numbers: lottoNumbers, valid: lottoValid },
        ball: { issue: ballIssue, numbers: ballNumbers, valid: ballValid }
    };

    fetch('http://124.70.221.179/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultLotto').innerText = data.lotto.message;
        document.getElementById('resultBall').innerText = data.ball.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultLotto').innerText = '提交失败，请检查网络连接';
        document.getElementById('resultBall').innerText = '提交失败，请检查网络连接';
    });
}
