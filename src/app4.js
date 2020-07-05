import './app4.css'
import $ from 'jquery'
const $circle = $('.circle')
$circle.on('mouseenter', () => {
    console.log("dianji")
    $circle.toggleClass('active')
})
$circle.on('mouseleave', () => {
    console.log("dianji")
    $circle.toggleClass('active')
})