function Contact(contact, user_id) {
    this.user_id = user_id
    this.id = contact.id
    this.first = contact.first_name
    this.last = contact.last_name
    this.work = contact.workplace
    this.email = contact.email
    this.phone = contact.phone
    this.linkedin = contact.linkedin
    this.reference = contact.reference
}

Contact.prototype.concatName = function() {
    return `${this.first} ${this.last}` 
}

// Listed job items (used on user show page)
Contact.prototype.formatIndex = function() {
    return `<h3><a href='/contacts/${this.id}'>${this.first} ${this.last}</a></h3>`
}

Contact.prototype.formatBulletItem = function() {
    // return `<h3><a href='/users/${this.user_id}/contacts/${this.id}'>${this.first} ${this.last}</a></h3>`
    return `<h3 class="list-items"><a class="bullet-item" href="/contacts/${this.id}"><li>${this.first} ${this.last}</li><br></a></h3>`
}

// Returns reference status string (used in contact show page)
Contact.prototype.referenceString = function(ref_bool= this.reference) {
    let refString = ref_bool.toString()
    return `<h3 id='reference-bool'>REFERENCE: ${refString}</h3>`
}

// Returns job with remove span (used in show pages of linked items)
Contact.prototype.formatSpan = function() {
    let spanItem = `<h3 class="w3-large" id="contactItem-${this.id}">
        <i class="material-icons w3-large contact" id=${this.id} data-id='${this.id}'>keyboard_arrow_down</i>
        <a href="/contacts/${this.id}">${this.concatName()}</a>
        </h3>
        <span id='${this.id}' class='contact remove-contact ${this.id}' data-id='${this.id}' style="display: none;">
        <p class='remove'>Remove</p>
        </span>`
    return spanItem
}

Contact.prototype.sortButton = function(sortBy= this.last) {
    let text = ref_bool ? 'First Name' : 'Last Name'
    return `<button id='sort-name' data-bool="${ref_bool}">${text}</button><br><br>`
}