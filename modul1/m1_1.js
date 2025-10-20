// Задача: создать счетчик с возможностью отслеживания истории изменений
function createAdvancedCounter(initialValue = 0) {
    let value = initialValue;
    const startValue = initialValue;
    const history = [];

 return {
        increment: function(amount = 1) {
            value += amount;
            history.push(`+${amount}`);
            return value;
        },
        
        decrement: function(amount = 1) {
            value -= amount;
            history.push(`-${amount}`);
            return value;
        },
        
        getValue: function() {
            return value;
        },
        
        getHistory: function() {
            return [...history]; // возвращаем копию массива
        },
        
        reset: function() {
            value = startValue;
            history.length = 0; // очищаем историю
            return value;
        }


}
};


// Тесты для проверки
const counter = createAdvancedCounter(10);
console.log(counter.getValue()); // 10
console.log(counter.increment(5)); // 15
console.log(counter.decrement(3)); // 12
console.log(counter.getHistory()); // ['+5', '-3']
console.log(counter.reset()); // 10


alert('Run complite')