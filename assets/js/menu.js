if (screen.width > 800) {
   function toggleIn() {
      let links = document.getElementById ("links") ;
      let blob = document.getElementById("blob");

      let menutoggle = document.querySelector('.toggle');
      menutoggle.classList.toggle('active')
      blob.classList.toggle("open");
      if (links.style.display == "block"){
         links.style.display = "none";
      } else {
         links.style.display = "block";
      };
   };

   function toggleOut() {
      let links = document.getElementById ("links") ;
      let blob = document.getElementById("blob");

      let menutoggle = document.querySelector('.toggle');
      menutoggle.classList.toggle('active')
      blob.classList.toggle("open");
      if (links.style.display == "block"){
         links.style.display = "none";
      } else {
         links.style.display = "block";
      };
   };
};

function toggle() {
   let links = document.getElementById("links");
   let blob = document.getElementById("blob");

   blob.classList.toggle("open");
   if (links.style.display == "block"){
      links.style.display = "none";
   } else {
      links.style.display = "block";
   };
};
// function to set a given theme/color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
   } else {
      setTheme('theme-dark');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
   } else {
      setTheme('theme-light');
      document.getElementById('slider').checked = true;
   }
})();

