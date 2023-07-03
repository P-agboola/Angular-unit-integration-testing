import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("calculatorService", () => {
  let logger: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    logger = jasmine.createSpyObj("Logger", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: logger },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
