function translator(str) {
    return str.replace('ПОНЕДЕЛЬНИК', 'MONDAY').replace("ВТОРНИК", "Tuesday").replace("СРЕДА", "Wednesday").replace("ЧЕТВЕРГ", "Thursday").replace("ПЯТНИЦА", "Friday").replace("СУББОТА", "Saturday").replace("ВОСКРЕСЕНЬЕ", "Sunday");
};

console.log(translator(`Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`));