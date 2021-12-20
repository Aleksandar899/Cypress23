class Header {
    get allGalleriesBtn() {
        return cy.get(".nav-link").eq(0);
    }
    get myGalleries() {
        return cy.get("a[href='/my-galleries']");
    }

    get createGallery() {
        return cy.get("a[href='/create']");
    }

    get loginBtn() {
        return cy.get("a[href='/login']");
    }

    get registerBtn() {
        return cy.get("a[href='/register']");
    }

    get logoutBtn() {
        return cy.get(".nav-link").eq(3);
    }

}

export const header = new Header();