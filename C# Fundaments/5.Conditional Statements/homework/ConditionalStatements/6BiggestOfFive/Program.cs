using System;


class Biggest_of_5
{
    static void Main()
    {

        double a = double.Parse(Console.ReadLine());
        double b = double.Parse(Console.ReadLine());
        double c = double.Parse(Console.ReadLine());
        double d = double.Parse(Console.ReadLine());
        double e = double.Parse(Console.ReadLine());

        if (a == b & a == c & a == d & a == e)

        {
            Console.WriteLine("{0}", a);
        }

        else if (b > a & b > c & b > d & b > e)
        {
            Console.WriteLine("{0}", b);
        }
        else if (c > a & c > b & c > d & c > e)
        {
            Console.WriteLine("{0}", c);
        }
        else if (d > a & d > b & d > c & d > e)
        {
            Console.WriteLine("{0}", d);
        }
        else if (e > a & e > b & e > c & e > d)
        {
            Console.WriteLine("{0}", e);
        }
    }
}


