
function getQueryParam(param){
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(param);
}

function setupNavigationButtons(){
  const buttons = document.querySelectorAll('.action-btn');
  buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
      const targetDivId = button.getAttribute('data-target-div');
      window.location.href = `mealPage.html?target=${targetDivId}`;
    });
  });
}

function showTargetDiv(){
  const targetDivId = getQueryParam('target');
  const allDivs = document.querySelectorAll('.content');

  allDivs.forEach(div =>(div.style.display ='none'));
  

  if (targetDivId){
    const targetDiv = document.querySelector(`[data-target-div="${targetDivId}"]`);
    if (targetDiv){
      targetDiv.style.display='block';
    }
    else {
      console.error('Target div not found');
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  if(document.querySelectorAll('.action-btn').length) {
    setupNavigationButtons();
  }
  if(document.querySelectorAll('.content').length){
    showTargetDiv();
  }
})