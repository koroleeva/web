document.querySelectorAll('.check-item').forEach(item => {
    item.addEventListener('click', function() {
        const parentGroup = this.closest('.checkbox-group');
            
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            return;
        }

        parentGroup.querySelectorAll('.check-item').forEach(el => {
            el.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});
