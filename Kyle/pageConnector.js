function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  for (const page of pages) {
      page.classList.remove('active');
  }
  document.getElementById(pageId).classList.add('active');
}

