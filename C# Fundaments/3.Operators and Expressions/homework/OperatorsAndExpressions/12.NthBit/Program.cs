using System;

class NthBit
{
    static void Main()
    {
        // Input
        ulong p = ulong.Parse(Console.ReadLine());
        byte n = byte.Parse(Console.ReadLine());
        double pPow = (ulong)Math.Pow(2, 55);
        // Output
        if ((n < 55) && (p <= pPow))
        {
            ulong result = (p >> n) & 1;
            Console.WriteLine(result == 0 ? "0" : "1");
        }
    }
}