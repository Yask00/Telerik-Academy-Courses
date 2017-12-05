using System;



class PointsInCircle
{
    static void Main()
    {

        double x = double.Parse(Console.ReadLine());
        double y = double.Parse(Console.ReadLine());

        double distance = Math.Sqrt(x * x + y * y);

        Console.WriteLine((distance <= 2) ? "yes {0:0.00}" : "no {0:0.00}", distance);

    }
}

