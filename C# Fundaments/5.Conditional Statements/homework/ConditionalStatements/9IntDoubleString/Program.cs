using System;




class Int_Double_and_String
{
    static void Main()
    {

        string type = Console.ReadLine();

        if (type == "integer")
        {

            int a = int.Parse(Console.ReadLine());
            Console.WriteLine("{0}", a + 1);
        }

        else if (type == "real")
        {
            double b = double.Parse(Console.ReadLine());
            Console.WriteLine("{0:F2}", b + 1);
        }
        else if (type == "text")
        {
            string c = Console.ReadLine();
            Console.WriteLine("{0}", c + "*");
        }
    }
}