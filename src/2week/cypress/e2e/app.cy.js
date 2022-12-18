describe("FECrash 카페", () => {
  beforeEach(() => {
    cy.visit({
      url: "http://localhost:5500/src/2week",
      method: "GET",
    });
  });

  afterEach(() => {
    cy.wait(100);
  });

  context("최초 렌더링 시", () => {
    it("장바구니 총 가격은 0원이어야 한다.", () => {
      cy.get(".total-price").should("have.text", "₩0");
    });
    it("세금 총 총 가격은 0원이어야 한다.", () => {
      cy.get(".tax-price").should("have.text", "₩0");
    });
    it("아이템은 총 12개여야 한다.,", () => {
      cy.get(".item").should(($el) => {
        expect($el).to.have.length(12);
        expect($el.eq(0)).to.contain("오늘의 커피");
      });
    });
  });

  context("장바구니에 담기 버튼 클릭 시", () => {
    it("오늘의 커피 클릭 시", () => {
      cy.get(".add-to-cart").first().click();
      cy.get(".total-price").should("have.text", "₩1,000");
      cy.get(".tax-price").should("have.text", "₩100");
    });
    it("티라미수 클릭 시", () => {
      cy.get(".add-to-cart").last().click();
      cy.get(".total-price").should("have.text", "₩7,200");
      cy.get(".tax-price").should("have.text", "₩720");
    });
  });

  context("장바구니 총 가격이 2만원 이상일 때", () => {
    it("2만원 이하,", () => {
      for (let i = 0; i < 5; i++) {
        cy.get("button").first().click();
      }
      cy.get(".total-price").should("have.text", "₩5,000");
    });
    it("2만원 이상,", () => {
      for (let i = 0; i < 4; i++) {
        cy.get("button").last().click();
      }
      cy.get(".free-shipping-icon")
        .first()
        .should("have.text", "FREE SHIPPING");
    });
  });
});
