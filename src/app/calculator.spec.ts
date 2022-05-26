import { Calculator} from './calculator';

describe('Test for Calculator', ()=>{
    describe('multiply method', ()=>{
        it('#should return a nine', ()=>{
            //Arrange
            const calculator = new Calculator();
            //Act
            const rta = calculator.multiply(3, 3);
            //Assert
            expect(rta).toEqual(9);
        });
    });

    describe('Divide method', ()=>{
        it('should return a 5', ()=>{
            //Arrange
            const calculator = new Calculator();
            //Act
            const rta = calculator.divide(25, 5);
            //Assert
            expect(rta).toEqual(5);
        });
    
        it('#divide for a zero', ()=> {
            //Arrange
            const calculator = new Calculator();
            //Act
            const rta = calculator.divide(250, 0);
            //Assert
            expect(rta).toBeNull();
        });
    });

});