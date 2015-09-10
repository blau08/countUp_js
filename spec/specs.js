describe("countUp", function() {
  it("will increment a number 5 up to 30", function() {
    expect(countUp(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
  });
});
