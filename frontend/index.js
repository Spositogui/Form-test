const btn_plus = document.getElementById('btn-plus')
const btn_minus = document.getElementById('btn-minus')
const total_stickers = document.getElementById('total-stickers')
const react = document.getElementById('reacts')
const vue = document.getElementById('vue')
const angular = document.getElementById('angular')
const submit = document.getElementById('btn-submit')

var total = 0
var react_checked = vue_checked = angular_checked = 0

//Quais stickers
react.addEventListener('click', () => {
    react_checked = react_checked == 0 ? 1 : 0
    att_btn_submit()
})

vue.addEventListener('click', () => {
    vue_checked = vue_checked == 0 ? 1 : 0
    att_btn_submit()
})

angular.addEventListener('click', () => {
    angular_checked = angular_checked == 0 ? 1 : 0
    att_btn_submit()
})

//Quantos stickers
btn_plus.addEventListener('click', () => {
    btn_minus.classList.remove('btn-disabled')
    total = parseInt(total_stickers.value) + 1
    total_stickers.value = total
    att_btn_submit()
})

btn_minus.addEventListener('click', () => {
    if(total > 0){
        total = parseInt(total_stickers.value) - 1
        total_stickers.value = total
    }
    if(total == 0){
        total_stickers.value = total
        btn_minus.classList.add('btn-disabled')
    }
    att_btn_submit()
})

total_stickers.addEventListener('change', () => {
    if(total_stickers.value == 0){
        btn_minus.classList.add('btn-disabled')
    }
    else if (total_stickers.value > 0){
        total = total_stickers.value
        btn_minus.classList.remove('btn-disabled')
    }
    else {
        total_stickers.value = total = 0
    }
    att_btn_submit()
})

//Submit
att_btn_submit = () => {
    let sticker_total = react_checked + vue_checked + angular_checked
    if(sticker_total == 0 || total == 0){
        submit.classList.add('btn-disabled')
    }
    else {
        submit.classList.remove('btn-disabled')
    }

    //remove red color for input
    if(total > 0){
        total_stickers.classList.remove('submitted')
    }

    if(sticker_total > 0){
        react.classList.remove('submitted')
        vue.classList.remove('submitted')
        angular.classList.remove('submitted')
    }
}

submit.addEventListener('click', () => {
    let count = react_checked + vue_checked + angular_checked
    if(count > 0 && total > 0){
        // document.getElementById('form').submit()
        document.getElementById('submit-sucefull').classList.add('sucefull')
    }
    //add red color for input
    if (total == 0) {
        total_stickers.classList.add('submitted')
    }
    if(count == 0){
        react.classList.add('submitted')
        vue.classList.add('submitted')
        angular.classList.add('submitted')
    }
})