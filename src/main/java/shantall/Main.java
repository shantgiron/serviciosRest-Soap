package shantall;

import spark.ModelAndView;
import spark.Spark;
import spark.template.thymeleaf.ThymeleafTemplateEngine;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static spark.Spark.get;

public class Main {
    public static void main(String[] args) {
        Spark.staticFileLocation("/");
        Spark.port(4568);

        new Main();
    }

    public Main() {
        get("", (request, response) -> {
            response.redirect("/rest");
            return null;
        });

        get("/rest", (request, response) -> {
            Map<String, Object> modelo = new HashMap<>();
            return renderThymeleaf(modelo,"/FormRest");
        });
    }

    public static String renderThymeleaf(Map<String, Object> model, String templatePath) {
        return new ThymeleafTemplateEngine().render(new ModelAndView(model, templatePath));
    }
}
