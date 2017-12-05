using System;




class Divide
{
    static void Main()
    {

        int input = int.Parse(Console.ReadLine());



        if (input % 5 == 0 && input % 7 == 0)
        {
            Console.WriteLine("true" + " " + input);
        }
        else
        {
            Console.WriteLine("false" + " " + input);
        }
    }
}
