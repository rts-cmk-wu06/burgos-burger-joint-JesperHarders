// Gallery

let largeImage = document.querySelector('.gallery__Large-image')
let thumbnail = document.querySelectorAll('.gallery__Thumbnail')
let container = document.querySelector('.grid-container')

function setGalleryImage(event){
    if(event.target.className == 'gallery__Large-image'){
        let imageSrc = event.target.attributes.src;
        largeImage.setAttribute('src', imageSrc)
    }
}

container.addEventListener('click', setGalleryImage)

// Form validation

let form = document.querySelector('#form')
let email = document.querySelector('#email')
let name = document.querySelector('#name')

form.addEventListener('submit', function(e){
    let messages = []
    
    if(form.name.value === '' || name.value == null){
        messages.push('Navn skal udfyldes')
    }

    if(form.email.value.length == 0) {
        messages.push('Email skal udfyldes')
    } else {
        if(validateEmail(form.email.value)) {
           console.log('Dygtig');
        } else {
            messages.push('Email er ikke gyldigt')
        }
    }
     

    if(messages.length > 0){
        alert(messages.join(', '))
        e.preventDefault()
    }

})

function validateEmail(email) {
    let re = /(.+)@(.+){2,}\.(.+){2,}$/;
    return re.test(String(email).toLowerCase());
 }