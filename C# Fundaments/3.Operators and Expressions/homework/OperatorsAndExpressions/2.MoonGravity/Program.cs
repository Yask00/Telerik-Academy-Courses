using System;



class MoonGravity
{
    static void Main()
    {

        double w = double.Parse(Console.ReadLine());

        float result = (0.17f * (float)w);

        Console.WriteLine(("{0:F3}"), result);
    }
}
