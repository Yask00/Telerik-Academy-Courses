using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.DefineClass
{
    class Program
    {
        static void Main()
        {
            Cat firstCat = new Cat();
            firstCat.Name = "Tony";
            firstCat.SayMiau();

            Cat secondCat = new Cat("Pepy", "red");
            secondCat.SayMiau();

            Console.WriteLine("Cat {0} is {1}.",
            secondCat.Name, secondCat.Color);
        }
    }
}
