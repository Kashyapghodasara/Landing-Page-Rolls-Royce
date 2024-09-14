function PhantomPage() {
    window.location.href ="Phantom.html"; // Replace with your desired URL
}
function GhostPage() {
    window.location.href ="Ghost.html"; // Replace with your desired URL
}
function GhostExtPage() {
    window.location.href ="ghost Ext.html"; // Replace with your desired URL
}
function PhantomExtPage() {
    window.location.href ="Phantom Ex.html"; // Replace with your desired URL
}
function GhostHomePage() {
    window.location.href ="index2.html"; 
}
function GhostExtHomePage() {
    window.location.href ="index2.html"; 
}
function PhantomHomePage() {
    window.location.href ="index2.html"; 
}
function PhantomextHomePage() {
    window.location.href ="index2.html"; 
}
function ContactUs() {
    window.location.href ="Contact.html"; 
}
function Model() {
    window.location.href ="Model.html"; 
}
/*document.getElementById('model-link').onclick = function() {
    window.location.href = 'https://www.example.com/model'; // Replace with your actual URL
};*/

document.getElementById('bespoke-link').onclick = function() {
    window.location.href = 'https://www.example.com/bespoke'; // Replace with your actual URL
};

document.getElementById('news-link').onclick = function() {
    window.location.href = 'https://www.example.com/news'; // Replace with your actual URL
};

document.getElementById('services-link').onclick = function() {
    window.location.href = 'https://www.example.com/services'; // Replace with your actual URL
};

/*document.getElementById('contact-link').onclick = function() {
    window.location.href = 'https://www.example.com/contact'; // Replace with your actual URL
};*/







const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

