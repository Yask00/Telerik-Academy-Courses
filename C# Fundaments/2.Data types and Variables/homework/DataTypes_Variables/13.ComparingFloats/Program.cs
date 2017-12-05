using System;


    class Program
    {
        static void Main()
        {

        double first = double.Parse(Console.ReadLine());
        double second = double.Parse(Console.ReadLine());

        bool deduction = Math.Abs(first - second) < 0.000001;

        if (deduction)
        {
            Console.WriteLine("true");
        }
        else
        {
            Console.WriteLine("false");
        }
    }
    }
