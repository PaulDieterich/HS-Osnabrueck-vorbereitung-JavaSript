var earth = {
    isRound: true,
    numberFromSun: 3

}
discribe("Earth", function(){
    it("is round", function(){
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun", function(){
        expect(earth.numberFromSun).toBe(3)
    });
});

alert("asd");