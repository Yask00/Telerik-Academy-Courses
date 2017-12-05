using System;

class PointCircleRectangle
{
    static void Main()
    {

        double x = double.Parse(Console.ReadLine());
        double y = double.Parse(Console.ReadLine());

        double circle = Math.Sqrt(Math.Pow((x - 1), 2.0) + Math.Pow((y - 1), 2.0));

        bool inCircle = (circle <= 1.5);
        bool inRectangle = ((x >= -1) && (x <= 5) && (y <= 1) && (y >= -1));


        Console.WriteLine((inCircle ? "inside circle" : "outside circle") +
            " " + (inRectangle ? "inside rectangle" : "outside rectangle"));



    }
}