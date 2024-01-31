const showMore = document.querySelector('.show_more')
const image = document.querySelectorAll('.floor_four_image-photo_li').length
let items = 3

showMore.addEventListener('click', () => {
	items += 3
	console.log(items)
	const array = Array.from(document.querySelector('.floor_ul_image').children)
	console.log(array)
	const visItems = array.slice(0, items)
	console.log(visItems)
	visItems.forEach(el => el.classList.add('is-visible'))
	if (visItems.length === image) {
		showMore.style.display = 'none'
	}
})
