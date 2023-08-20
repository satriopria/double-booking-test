describe("Booking Test", () => {
  it("should detect price mismatch", () => {
    // Simulasi booking dengan tanggal dan waktu tertentu
    const date = "2022-12-10";
    const time = "09.00 - 11.00";
    cy.visit("http://www.dummybooking.com/create-form");
    cy.get("#input_date").type(date);
    cy.get("#input_time").type(time);
    cy.get("#submit_button").click();

    // Hasil pengambilan harga dari database atau API
    const expectedPrice = 100000; // Harga yang seharusnya

    // Melakukan verifikasi harga yang ditampilkan
    cy.get("#booking_price").should("have.text", expectedPrice.toString());
  });

  it("should detect double booking", () => {
    // Simulasi booking dengan tanggal dan waktu yang sama
    const date = "2022-12-10";
    const time = "09.00 - 11.00";

    // Booking pertama
    cy.visit("http://www.dummybooking.com/create-form");
    cy.get("#input_date").type(date);
    cy.get("#input_time").type(time);
    cy.get("#submit_button").click();

    // Booking kedua
    // Melakukan booking kembali pada tanggal dan waktu yang sama
    cy.visit("http://www.dummybooking.com/create-form");
    cy.get("#input_date").type(date);
    cy.get("#input_time").type(time);
    cy.get("#submit_button").click();

    // Melakukan verifikasi pesan peringatan dobel booking
    cy.get("#alert_message").should(
      "contain.text",
      "Failed: Double booking detected"
    );
  });
});