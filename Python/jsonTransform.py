import json

def jsonTransform(data):
    data["superherosbyCity"] = []

    # Creating an empty list for each city in input dict
    for hero in data["superheros"]:
        if any(hero["city"] in cityObj for cityObj in data["superherosbyCity"]):
            print("true")
        else:
            data["superherosbyCity"].append(
                {hero["city"]: []}
            )

    # Appending each hero's name in its respective city (it is guaranteed that the if condition willbe true for atleast 1 city)
    for hero in data["superheros"]:
        for city in data["superherosbyCity"]:
            if hero["city"] in city:
                city[hero["city"]].append(hero["name"])
                break

    data.pop("superheros")
    return data

def main():
    with open('data.json', 'r') as jsondata:
        jd=jsondata.read()

    data = json.loads(jd)

    # Calling the function to transform JSON
    transformedData = jsonTransform(data)

    json_string = json.dumps(transformedData)
    with open('transformedData.json', 'w') as outfile:
        outfile.write(json_string)

if __name__ == "__main__":
    main()