class Rectangle {
    constructor(width, height) {
      this.width = width; 
      this.height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(value) {
      if (value >= 0) {
        this._width = value;
      } 
      else {
        console.error("Width must be greater than 0");
      }
    }

    set height(value) {
        if (value >= 0) {
          this._height = value;
        } 
        else {
          console.error("Height must be greater than 0");
        }
      }
  
    get width() {
      return this._width;
    }

    get height() {
        return this._height;
      }
  }
  
  const rect = new Rectangle(10, 5);
  const rect1 = new Rectangle(20, 5);

  
  console.log(rect.area); 
  
  rect.width = 20; 
  console.log(rect.area); 
  



  class Rectangle2 {
    #width;
    #height;
    
    constructor(width, height) {
      this.#width = width; 
      this.#height = height;
    }
  
    get area() {
      return this.#width * this.#height;
    }
  
    set width(value) {
      if (value >= 0) {
        this.#width = value;
      } 
      else {
        console.error("Width must be greater than 0");
      }
    }

    set height(value) {
        if (value >= 0) {
          this.#height = value;
        } 
        else {
          console.error("Height must be greater than 0");
        }
      }
  
    get width() {
      return this.#width;
    }

    get height() {
        return this.#height;
      }
  }
  
  const rect2 = new Rectangle2(10, 5);
  const rect21 = new Rectangle2(20, 5);

  
  console.log(rect2.area); 
  
  rect2.width = 20; 
  console.log(rect2.area); 
//   try {
//     rect.width = -5; 
//   } catch (error) {
//     console.error(error.message);
//   }