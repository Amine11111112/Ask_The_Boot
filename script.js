// التحكم بعملية الانتقال بين الصفحات
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // يمكنك هنا إضافة التحقق من صحة بيانات تسجيل الدخول (اختياري)

    // الانتقال إلى واجهة الدردشة
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('chat-page').style.display = 'flex';
});

// التحكم بإرسال الرسائل في واجهة الدردشة
document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        // إنشاء رسالة جديدة
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<p>${messageText}</p>`;

        // إضافة الرسالة إلى صندوق الدردشة
        document.getElementById('chat-box').appendChild(newMessage);

        // مسح حقل الإدخال بعد الإرسال
        messageInput.value = '';

        // التمرير إلى الأسفل لرؤية الرسالة الجديدة
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
});
