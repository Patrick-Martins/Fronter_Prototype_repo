const drone = document.getElementById("newsDrone");
const content = document.getElementById("pinned3");
const analytics = document.getElementById("pinned2");
const submissions = document.getElementById("pinned1");

drone.addEventListener('click', function (){
    window.location.href = 'drone.html';
});

content.addEventListener('click', function (){
    window.location.href = 'material3.html';
});
analytics.addEventListener('click', function (){
    window.location.href = 'analytics.html';
});
submissions.addEventListener('click', function (){
    window.location.href = 'material_upload.html';
});


