document.addEventListener('DOMContentLoaded', function() {
    // Get all the package list items
    const packages = document.querySelectorAll('.villa-packages .info-table li');
    
    // Default behavior: Package 1 is open on page load
    let activePackage = document.getElementById('package1');
    activePackage.classList.add('active');
  
    // Function to handle click events on the package
    packages.forEach(function(packageItem) {
      packageItem.addEventListener('click', function() {
        // Remove active class from all packages
        packages.forEach(item => item.classList.remove('active'));
  
        // Add active class to the clicked package
        this.classList.add('active');
      });
    });
  });
  