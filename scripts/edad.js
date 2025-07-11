export function calculateAge(birthdayDate) {
    const now = new Date();
    const birthday = new Date(birthdayDate);

    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    // Ajustar si aún no ha cumplido mes
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();  // días del mes anterior
    }

    // Ajustar si aún no ha cumplido año
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}