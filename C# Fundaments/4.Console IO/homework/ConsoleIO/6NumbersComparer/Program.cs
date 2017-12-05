using System;



class NumbersComparer
{
    static void Main()
    {

        double A = double.Parse(Console.ReadLine());
        double B = double.Parse(Console.ReadLine());

        if (A - B >= 0)
        {
            Console.WriteLine(A);
        }

        else if (A - B == 0)
        {
            Console.WriteLine("0");
        }
        else if (B - A >= 0)
        {
            Console.WriteLine(B);
        }




    }
}
