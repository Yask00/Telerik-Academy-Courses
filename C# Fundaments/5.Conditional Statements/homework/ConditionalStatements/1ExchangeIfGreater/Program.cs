using System;



class Exchange_If_Greater
{
    static void Main()
    {

        double A = double.Parse(Console.ReadLine());
        double B = double.Parse(Console.ReadLine());

        if (A > B)
        {
            Console.WriteLine("{0}" + " " + "{1}", B, A);
        }

        else if (B > A)
        {
            Console.WriteLine("{0}" + " " + "{1}", A, B);
        }

        else
        {
            Console.WriteLine("{0}" + " " + "{1}", A, B);
        }
    }
}

