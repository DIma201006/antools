document.querySelectorAll('.button-like').forEach(item => {
    item.addEventListener('click', function () {
        if (document.getElementById('like').classList.contains('active')) {
            document.getElementById('like').classList.remove('active');
            document.getElementById('red-like').classList.add('active');
            return
        } else 
        document.getElementById('red-like').classList.remove('active');
        document.getElementById('like').classList.add('active');
       
     })
});
    
