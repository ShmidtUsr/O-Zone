//чекбокс
export default function toggleCheckBox() {
    let checkbox = document.querySelectorAll('.filter-check_checkbox');
    //let checkbox = document.getElementById('discount-checkbox');

    checkbox.forEach(function (elem, i) {
        elem.addEventListener('change', function () {
            if (this.checked === true) {
                this.nextElementSibling.classList.add('checked');
//                console.log('стоит');
            } else {
                this.nextElementSibling.classList.remove('checked');
//                console.log('не стоит');
            }
        });
//        console.log(i);
    });
    // for (let i = 0; i < checkbox.length; i++) {
    //     checkbox[i].addEventListener('change', function(){
    //         if (this.checked === true) {
    //             this.nextElementSibling.classList.add('checked');
    //             console.log('стоит');
    //         } else {
    //             this.nextElementSibling.classList.remove('checked');
    //             console.log('не стоит');
    //         }
    //     });    
    // }
}
//end чекбокс