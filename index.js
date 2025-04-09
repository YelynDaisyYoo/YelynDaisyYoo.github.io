document.getElementById('toggleLessons').addEventListener('click', function() {
    const lessons = document.getElementById('lessons');
    lessons.classList.toggle('hidden');
  
    //보기 숨기기 버튼
    if (lessons.classList.contains('hidden')) {
      this.textContent = '오늘 수업 일정 보기';
    } else {
      this.textContent = '오늘 수업 일정 숨기기';
    }
  });
  