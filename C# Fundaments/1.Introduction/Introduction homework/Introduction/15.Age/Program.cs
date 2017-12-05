using System;

class DateBirthday

{

    static void Main()

    {

        DateTime Birthday = DateTime.ParseExact(Console.ReadLine(), "MM.dd.yyyy", null);

        DateTime today = DateTime.Now;

        int age = today.Year - Birthday.Year;

        if (today < Birthday.AddYears(age)) age--;

        Console.WriteLine(age);

        Console.WriteLine(age + 10);

    }

}