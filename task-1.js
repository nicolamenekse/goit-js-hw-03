function slugify(title) {
    return title.split(" ").join("-").toLowerCase()
}


slugify("Arrays for beginners")
slugify("English for developer")
slugify("Ten secrets of JavaScript")
slugify("How to become a JUNIOR developer in TWO WEEKS")