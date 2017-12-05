using System;


class Biggest_of_3
{
    static void Main()
    {

        double a = double.Parse(Console.ReadLine());
        double b = double.Parse(Console.ReadLine());
        double c = double.Parse(Console.ReadLine());

        if (a == b & c == b & c == a & b == c)
        {
            Console.WriteLine("{0}", a);
        }

        else
        {
            if (a > b & a > c)
            {
                Console.WriteLine("{0}", a);
            }
            else if (b > a & b > c)
            {
                Console.WriteLine("{0}", b);
            }
            else if (c > a & c > b)
            {
                Console.WriteLine("{0}", c);
            }
        }

    }
}
