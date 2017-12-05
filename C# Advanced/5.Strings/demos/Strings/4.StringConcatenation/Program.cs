using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.StringConcatenation
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName = "Svetlin";
            string lastName = "Nakov";

            string fullName = firstName + " " + lastName;
            Console.WriteLine(fullName);

            int age = 25;

            string nameAndAge =
                "Name: " + fullName +
                "\nAge: " + age;
            Console.WriteLine(nameAndAge);
        }
    }
}
