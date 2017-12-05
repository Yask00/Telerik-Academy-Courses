using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.RandomNumbers
{
    class Program
    {
        static void Main()
        {
            // This random generator is initialized with random seed
            Random randomGenerator = new Random();
            Console.WriteLine(randomGenerator);
            Console.WriteLine(randomGenerator.Next());

            // This random generator is initialized with the same seed
            // bacause is initialized in the same moment in the time
            Random anotherRandomGenerator = new Random();

            // This will print the same value
            Console.WriteLine(anotherRandomGenerator.Next());

            // This random generator has fixed initial seed
            Random randomGenerator1 = new Random(123);
            Console.WriteLine(randomGenerator1.Next());

            // This random generator has fixed initial seed
            Random randomGenerator2 = new Random(456);
            Console.WriteLine(randomGenerator2.Next(50));
        }
    }
}
