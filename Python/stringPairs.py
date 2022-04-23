def main():
    # inputStr = "12345678"
    inputStr = "123R456"
    output = []

    i, j = 0, len(inputStr) - 1

    while i < j:
        output.append((inputStr[i], inputStr[j]))
        i += 1
        j -= 1

    # For input string with odd length
    if i == j:
        output.append((inputStr[i],))

    print(output) 



if __name__ == "__main__":
    main()