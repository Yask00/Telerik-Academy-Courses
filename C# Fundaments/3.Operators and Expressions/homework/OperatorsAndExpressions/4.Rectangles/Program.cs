using System;



class Rectangles
{
    static void Main()
    {

        double width = double.Parse(Console.ReadLine());
        double height = double.Parse(Console.ReadLine());

        double area = (width * height);
        double parameter = (2 * (width + height));

        Console.WriteLine(("{0:0.00} {2:0.00}"), area, " ", parameter);

    }
}
