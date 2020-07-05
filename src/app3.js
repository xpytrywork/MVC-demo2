import './app3.css'
import $ from 'jquery'
const $square = $('.square')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes'

$square.toggleClass('active', active)

$square.on('click', () => {
    if ($square.hasClass('active')) {
        localStorage.setItem('app3.active', 'no')
        $square.removeClass('active')
    } else {
        localStorage.setItem('app3.active', 'yes')
        $square.addClass('active')
    }
})