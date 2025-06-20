// tabs.js
document.addEventListener('DOMContentLoaded', () => {
  // نجلب كل أزرار التابات وكل الـ containers الخاصة بالمحتوى
  const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
  const tabContents = Array.from(document.querySelectorAll('.tab-content'));

  // لو مفيش تابات، نطلع من الدالة
  if (tabButtons.length === 0 || tabContents.length === 0) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // نلغي الـ active من كل الأزرار وكل المحتويات
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // نضيف active للزر اللي اتضغط
      button.classList.add('active');

      // نعرض المحتوى الموازي للتاب اللي اتضغط
      const targetId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
